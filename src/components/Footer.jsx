import Contacts from './Contacts.jsx'
import Navigation from "./Navigation";
import './Footer.css'

export default function Footer() {

    return (
        <footer className="footer">
            <p>Ждём вас в нашем пункте выдачи!</p>
            <Navigation />
            <Contacts/>
        </footer>
    )
}