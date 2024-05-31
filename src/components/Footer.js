export default function Footer() {
    const CURRENT_YEAR = new Date().getFullYear();
    return (
      <footer>
          <p className="copyright">
        Copyright &copy;{CURRENT_YEAR} All rights reserved | This template is made with <i className="ion-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
          </p>
  
  
      </footer>
    );
  }