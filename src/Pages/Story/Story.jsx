import React from 'react'
import StoryViewer from '../../Components/StoryComponents/StoryViewer'

const Story = () => {
    const story=[
        {
            image:"https://images.pexels.com/photos/11157048/pexels-photo-11157048.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },{
            image:"https://images.pexels.com/photos/16441221/pexels-photo-16441221/free-photo-of-colorful-flowers-in-the-garden.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },{
            image:"https://images.pexels.com/photos/17115432/pexels-photo-17115432/free-photo-of-wood-road-dawn-landscape.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },{
            image:"https://images.pexels.com/photos/4654447/pexels-photo-4654447.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },{
            image:"https://images.pexels.com/photos/6315943/pexels-photo-6315943.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        }
    ]
    return (
        <div>
            <StoryViewer stories={story}/>
        </div>
    )
}

export default Story
