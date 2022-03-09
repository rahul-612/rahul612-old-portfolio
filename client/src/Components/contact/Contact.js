import React, { useState } from 'react'
import "./contact.css"
import '../utility/observer.js'
import useOnScreen from '../utility/observer'
import isActive from '../utility/isActive';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const contact = () => {
    const history = useHistory();
    const [alert, setAlert] = useState(false)
    const [setRef, visible] = useOnScreen({ threshold: 0.2, triggerOnce: true });
    const [fdata, setFdata] = useState({
        name: "",
        email: "",
        msg: ""
    });

    let name, value;

    const inputEvent = (e) => {
        name = e.target.name;
        value = e.target.value;

        setFdata({ ...fdata, [name]: value })
    }

    const sendData = async (e) => {
        // event.preventDefault();
        // alert(`${fdata.name} ${fdata.email} ${fdata.email}`);

        e.preventDefault();
        const { name, email, msg } = fdata;

        const res = await fetch("/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, msg })
        });

        const data = await res.json();
        console.log(data.status)
        if (data.status === 422 || !data || !name || !email || !msg) {
            // window.alert("Please Try Again!");
            // setAlert(false)
            // alertShow();
            // setTimeout(function(){ alertFade() }, 4000);
            // console.log("Please Try Again!");

            toast.error('Please Try Again!', {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            // window.alert("Message Sent Successfull");
            // setAlert(true)
            // alertShow();
            toast.success('Message sent successfully!', {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });


            // setTimeout(function(){ alertFade() }, 4000);
            // console.log("Message Sent Successfull");

            history.push('/')
        }

        setFdata({
            name: "",
            email: "",
            msg: ""
        })
    }


    return (
        <>
            <section id="contact">
                <div className="custom-shape-divider-top-1632563289">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M1200 0L0 0 598.97 114.72 1200 0z" className="shape-fill"></path>
                    </svg>
                </div>
                <div className={visible ? "contact_head h_ani appear fade-in" : "contact_head fade-in"} ref={setRef}>contact {visible ? isActive(visible, 'contactNavItem') : null}</div>

                <div className={visible ? "contact_box appear fade-in" : "contact_box fade-in"} ref={setRef}>
                    <form method="POST">
                        <div className="inputBox">
                            <input type="text" name='name' autoComplete="off" value={fdata.name} onChange={inputEvent} required />
                            <label htmlFor="name">name</label>
                        </div>

                        <div className="inputBox">
                            <input type="email" name='email' autoComplete="off" value={fdata.email} onChange={inputEvent} required />
                            <label htmlFor="email">email</label>
                        </div>
                        <div className="inputBox">
                            <textarea name="msg" cols="71" rows="8" value={fdata.msg} onChange={inputEvent} autoComplete="off" required></textarea>
                            <label htmlFor="msg">Message</label>
                        </div>
                        <input type="submit" name="" value="Submit" onClick={sendData} />
                    </form>
                </div>
                {/* custom alert box */}
                {/*  <div className="alert fade-in flex">
                    <button>
                        <i className="fas fa-times" onClick={alertFade}></i>
                    </button>
                    <h2>{alert?'Sent Successfully':'Something went wrong'}</h2>
                    {alert?<i className="far fa-2x success fa-check-circle"></i>:<i class="far fa-2x fail fa-times-circle"></i>}
                </div> */}
                <ToastContainer
                    position="bottom-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />

            </section>
        </>
    )
}

// const alertFade = () => {
//     document.querySelector('.alert').classList.add('fade-in')
// }
// const alertShow = () => {
//     document.querySelector('.alert').classList.remove('fade-in')
// }

export default contact;
