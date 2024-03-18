import './style.scss'
export
const Button = ({children, className, disabled, type = 'base'}) => {
    return <button className={`main-button ${className} ${type}`}
                   disabled={disabled}
    >{children}</button>
}