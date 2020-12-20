import React from "react"
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF"
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter"
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram"
import { FaLine } from "@react-icons/all-files/fa/FaLine"
import { P } from "../elements"

import {
  FooterWrapper,
  FooterSocialWrapper,
  FooterSocialIcons,
} from "../elements"

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterSocialWrapper>
        <FooterSocialIcons>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>
              <FaFacebookF />
            </h3>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>
              <FaTwitter />
            </h3>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>
              <FaInstagram />
            </h3>
          </a>
          <a
            href="https://line.me/ja/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>
              <FaLine />
            </h3>
          </a>
        </FooterSocialIcons>
        <P size="xSmall" color="dark2">
          &copy; 2020 KYOYA
        </P>
      </FooterSocialWrapper>
    </FooterWrapper>
  )
}
