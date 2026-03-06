import React, {useState} from 'react'
import { Mail, MapPin, Github, LinkedIn, Twitter, Send, MessageSquare } from 'lucide-react'
import { PERSONAL_INFO } from '../../utils/constants'
import { FadeIn } from '../animations/FadeIn'

const Contact = () => {

   const[formData, setFormData] = useState({
      name:'',
      email:'',
      message:''
   });
   const[status, setStatus] = useState({ type: '', message: ''})

   const handleChange = (e) => {
      setFormData({
         ...formData,
         [e.target.name]: e.target.value
      })
   }

   const handleSubmit = (e) => {
      e.preventDefault();

      if(!formData.name || !formData.email || !formData.message){
         setStatus({ type: 'error', message: 'Please fill in all fields'})
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(!emailRegex.test(formData.email)){
         setStatus({ type: 'error', message: 'Please enter a valid email'})
         return;
      }

      setStatus({ type: 'success', message: 'Message send successfully! I\ll get back to you soon. '})
      setFormData({ name: '', email: '', message: ''})

      setTimeout(() => setStatus({ type: '', message: ''}))
   }

   const socialIcons = {
      github: Github,
      linkedIn: LinkedIn,
      twitter: Twitter
   };



  return (
      <section id='contact' className='relative py-20 bg-black overflow-hidden'>
         <div className='absolute inset-0 overflow-hidden'>
            <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 opacity-30 rounded-full blur-3xl'/>
            <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 opacity-30 rounded-full blur-3xl'/>
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 opacity-30 rounded-full blur-3xl'/>
         </div>

         <div className=''>
            <FadeIn delay={0}>
               <div className=''>
                  <div className=''>
                     <MessageSquare className='' />
                     <span className='' >Get In Touch</span>
                  </div>
                  <h2 className=''>Let's Work Together</h2>
                  <p className=''>Have a project in mind? Let's discuss how we can bring your ideas to life.</p>
               </div>  
            </FadeIn>   

            <div className=''>
               <FadeIn delay={100}>
                  <div className=''>
                     <form onSubmit={handleSubmit} className=''>
                        <div>
                           <label htmlFor="name">Name</label>
                           <input 
                              type="text"
                              id='name'
                              name='name'
                              value={formData.name}
                              onChange={handleChange}
                              className=''
                              placeholder='Your name'
                           />
                        </div>
                        <div>
                           <label htmlFor="email">Email</label>
                           <input 
                              type="email"
                              id='email'
                              name='email'
                              value={formData.email}
                              onChange={handleChange}
                              className=''
                              placeholder='your.email@example.com'
                           />
                        </div>

                        <div>
                           <label htmlFor="message">Message</label>
                           <textarea 
                              id='message'
                              name='message'
                              value={formData.message}
                              onChange={handleChange}
                              className=''
                              rows={5}
                              placeholder='Tell about your project ... '
                           />
                        </div>

                        <button type='submit' className=''>
                           <span>Send Message</span>
                           <Send className=''/>
                        </button>

                        {status.message && (
                           <div 
                              className={`p-4 rounded-xl ${status.type === 'success' 
                                 ? 'bg-green-500/10 border border-green-500/20 text-green-400'
                                 : 'bg-red-500/10 border border-red-500/20 text-red-400'
                              }`}>
                              {status.message }
                           </div>
                        )}
                     </form>
                  </div>
               </FadeIn>
            </div>
         </div>
      </section>
  )
}

export default Contact
