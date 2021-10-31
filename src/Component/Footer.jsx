
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faFacebookF, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'

import { faMobile } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
    return (<>
        <div className="flex w-full justify-center bg-verdant-green mt-7 p-8 sm:py-5 sm:bg-black ">
            <div className=" flex   w-1/2 flex-row justify-between sm:w-full md:text-mellow-yellow">
                <a href="https://www.facebook.com/garvit.dudeja" target="_blank">
                    <FontAwesomeIcon className="sm:text-gray-100 " icon={faFacebookF} />
                </a>
                <a href="https://twitter.com/garvit_dudeja" target="_blank">
                    <FontAwesomeIcon className="sm:text-gray-100" icon={faTwitter} />
                </a>
                <a href="https://www.instagram.com/garvit.dudeja/" target="_blank">
                    <FontAwesomeIcon className="sm:text-gray-100" icon={faInstagram} />
                </a>
                <a href="tel:+91 7009330672">
                    <FontAwesomeIcon className="sm:text-gray-100" icon={faMobile} /></a>
            </div>
        </div>
       
        </>
    )
}
