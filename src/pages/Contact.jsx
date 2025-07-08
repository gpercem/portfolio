import { useState } from 'react'
import { HiMail, HiUser, HiChatAlt2, HiDocumentText } from 'react-icons/hi'
import './Contact.css'

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState(null)
  const [errorDetails, setErrorDetails] = useState('')
  
  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormStatus('submitting')
    setErrorDetails('')
    
    try {
      // First attempt: Try using the AJAX endpoint
      const formData = new FormData()
      
      // Add form fields
      Object.entries(formState).forEach(([key, value]) => {
        formData.append(key, value)
      })
      
      // Add FormSubmit special fields
      formData.append('_subject', `Website Contact: ${formState.subject}`)
      formData.append('_template', 'table')
      formData.append('_captcha', 'false')
      formData.append('_autoresponse', `Thank you for reaching out, ${formState.name}! I've received your message and will get back to you soon. - Gökhan Perçem`)
      
      const response = await fetch('https://formsubmit.co/d12ae397a3742217831e1ce1bee795eb', {
        method: 'POST',
        body: formData
      })
      
      if (response.ok) {
        setFormStatus('success')
        setFormState({
          name: '',
          email: '',
          subject: '',
          message: ''
        })
      } else {
        const errorText = await response.text()
        console.error('Form submission error:', errorText)
        setErrorDetails(`Status: ${response.status}. Please try again or contact directly via email.`)
        throw new Error(`Form submission failed with status ${response.status}`)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setFormStatus('error')
      
      if (!errorDetails) {
        setErrorDetails('Network error or FormSubmit service unavailable. Please try again later.')
      }
    }
  }
  
  return (
    <div className="page contact-page">
      <div className="contact-content glass">
        <h1>Get In Touch</h1>
        <p className="contact-description">
          Feel free to reach out to me with this form.<br/>
          You can also contact me from my <a href="https://linkedin.com/in/gokhanpercem" target="_blank" rel="noopener noreferrer">LinkedIn</a> account.
        </p>
        
        <div className="contact-form-container">
          {formStatus === 'success' ? (
            <div className="form-success glass">
              <div className="success-icon">✓</div>
              <h2>Thank you!</h2>
              <p>Your message has been sent successfully.</p>
              <button 
                className="form-button"
                onClick={() => setFormStatus(null)}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form 
              className="contact-form" 
              onSubmit={handleSubmit}
              action="https://formsubmit.co/gokhanpercem@gmail.com"
              method="POST"
            >
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="name">
                    <HiUser className="form-icon" />
                    <span>Name</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input glass-input"
                    placeholder="Your name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label" htmlFor="email">
                    <HiMail className="form-icon" />
                    <span>Email</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input glass-input"
                    placeholder="youremail@example.com"
                    value={formState.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label className="form-label" htmlFor="subject">
                  <HiDocumentText className="form-icon" />
                  <span>Subject</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="form-input glass-input"
                  placeholder="The subject..."
                  value={formState.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label className="form-label" htmlFor="message">
                  <HiChatAlt2 className="form-icon" />
                  <span>Message</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea glass-input"
                  placeholder="Your message..."
                  value={formState.message}
                  onChange={handleChange}
                  rows="4"
                  required
                ></textarea>
              </div>
              
              {/* Honeypot field to prevent spam */}
              <input 
                type="text" 
                name="_honey" 
                style={{display: 'none'}} 
              />
              
              {/* Hidden fields for formsubmit.co configuration */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://gokhanpercem.com/contact" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_subject" value={`Website Contact: ${formState.subject}`} />
              <input 
                type="hidden" 
                name="_autoresponse" 
                value={`Thank you for reaching out, ${formState.name}! I've received your message and will get back to you soon. - Gökhan Perçem`} 
              />
              
              <button 
                type="submit"
                className="form-button"
                disabled={formStatus === 'submitting'}
              >
                {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>
              
              {formStatus === 'error' && (
                <div className="form-error">
                  <p>Something went wrong. Please try again later.</p>
                  {errorDetails && <p className="error-details">{errorDetails}</p>}
                  <p className="direct-contact">
                    Alternatively, you can email me directly at gokhanpercem(at)gmail.com
                  </p>
                </div>
              )}
            </form>
          )}
          
          <div className="form-note">
            <p>This form uses FormSubmit service to handle submissions.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
