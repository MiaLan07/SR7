import Contacts from "../../components/Contacts";
import Footer from "../../components/Footer";

export default function ContactsPage() {

    return (
        <>
        <div className="contacts page">
            <p>При необходимости получения дополнительной информации, обращайтесь по контактам ниже:</p>
            <Contacts/>
        </div>
        <Footer/>
        </>
    )
}