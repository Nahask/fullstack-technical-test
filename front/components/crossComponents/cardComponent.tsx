import React, { HTMLAttributes } from 'react'

type CardComponentProps = {
	imageSrc?: string
	imageAlt?: string
	content: JSX.Element
	className?: string
}

export const Card: React.FC<CardComponentProps> = ({ imageSrc, imageAlt, content, className }) => {
	return (
		<div className={className}>
			<img src={imageSrc} align="left" alt={imageAlt} />
			<div>
				{content}
			</div>
		</div>
	)
}