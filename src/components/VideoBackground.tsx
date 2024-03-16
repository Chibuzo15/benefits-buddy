'use client'

import React, { useRef, useEffect, useState } from 'react';

const VideoBackground = ({ src, loop = true, muted = true }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

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
        <div className="video-background">
            <video
                ref={videoRef} loop muted={muted}
                className='object-contain'
            >
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoBackground;
