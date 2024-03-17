'use client'

import React, { useRef, useEffect, useState } from 'react';

const VideoBackground = ({ src, loop = true, muted = true, autoplay = false }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    React.useEffect(() => {
        const videoElement = videoRef.current;
        if (autoplay) {
            videoElement?.play();
            setIsPlaying(true);
        }
    }, [])

    const handleScroll = () => {
        const videoElement = videoRef.current;
        const videoRect = videoElement?.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Check if the video is 50px below the viewport top
        if (videoRect?.top <= windowHeight - 50) {
            if (!isPlaying) {
                videoElement?.play();
                setIsPlaying(true);
            }
        } else {
            if (isPlaying) {
                videoElement?.pause();
                setIsPlaying(false);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    return (
        <div className="h-full w-full ">
            <video
                ref={videoRef} loop muted={muted}
                className='object-contain'
                playsInline
                width='100%' height='100%'
                controls={false}
            >
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoBackground;
