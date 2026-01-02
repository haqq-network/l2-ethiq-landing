import { ReactNode, CSSProperties } from 'react'

interface GradientBorderCardProps {
  children: ReactNode
  className?: string
  innerClassName?: string
  style?: CSSProperties
}

const GradientBorderCard = ({ 
  children, 
  className = '', 
  innerClassName = '',
  style
}: GradientBorderCardProps) => {
  return (
    <div className={`gradient-border-card ${className}`} style={style}>
      <div className={`gradient-border-inner ${innerClassName}`}>
        {children}
      </div>
    </div>
  )
}

export default GradientBorderCard

