import React from 'react'
import { ExternalLink, Github, TrendingUp } from 'lucide-react'


const ProjectCard = ({project}) => {
  const { title, description, image, technologies, metrics, demoUrl, githubUrl } = project;


  return (
    <div className=''>
      <div className=''>
        <img 
        src={image}
        alt={title}
        className=''
        />

        <div className=''/>

        <div className=''>
          {demoUrl && (
            <a 
            href={demoUrl}
            target='_blank'
            rel='noopener noreferrer'
            className=''
            title='View Demo'
            >
             <ExternalLink className=''/> 
            </a>
          )}
          {githubUrl && (
            <a 
            href={githubUrl}
            target='_blank'
            rel='noopener noreferrer'
            className=''
            title='View Demo'
            >
             <Github className=''/> 
            </a>
          )}
        </div>

          <div>
            
          </div>

      </div>
    </div>
  )
}

export default ProjectCard
