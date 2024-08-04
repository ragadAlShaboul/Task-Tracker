const Footer = ({ onLogout }) => {
  
  return (
    <footer>
        <form 
        className="form-control"
        onSubmit={onLogout}
        >
            <input type="submit" value='LogOut'/>

        </form>
    </footer>
  )
}

export default Footer
