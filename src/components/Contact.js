import ContactForm from "./ContactForm";

const Contact = () => {
    return (   
        <div className="contacts pb-12" >
            <h1 className="opacity-100 text-[1.7rem] font-bold uppercase text-center mb-4 pt-16">
                Contact
            <div className="opacity-100 border-4 border-yellow -mt-[22px] w-[142px] mr-auto ml-auto"></div>
            </h1>
            <h2 className="text-white opacity-100 text-center mt-8 mb-8 pl-10 pr-10">
                Feel free to Contact me by submitting the form below and 
                I will get back to you as soon as possible
            </h2>
            <ContactForm />
        </div>
     );
}
 
export default Contact;