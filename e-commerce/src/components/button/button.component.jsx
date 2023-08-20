import './button.component.scss'

const buttontypes = {
    google:'google-sign-in',
    inverted:'inverted'
}

const Button = ({children, buttontype, ...otherProps})=>{
    return(
        <div>
        <button className={`button-container ${buttontypes[buttontype]}`} {...otherProps}>{children}</button>

        </div>
    )
}

export default Button;