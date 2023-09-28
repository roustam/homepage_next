'use client'
import {Navbar, NavbarMenu, NavbarMenuItem, NavbarBrand, NavbarContent, NavbarMenuToggle, NavbarItem, Link, Button} from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import LogoImage from '../../../../public/blob.svg'
export default function TopNavbar() {
  const menuItems = [
    'Projects',
    'Contacts',
    'Resume'
  ];

  return (
    <Navbar position="static" className="font-semibold rounded-xl">
      <NavbarBrand >
        <Link href="/">
          <Image priority width={50} height={20} src={LogoImage} alt='test' />
          Roustam blog
        </Link>
      </NavbarBrand>
            <NavbarItem>
                <Link href="/portfolio">
                My portfolio
                </Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="/resume">
                Resume
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="/contacts">
                Contacts
              </Link>
            </NavbarItem>
    </Navbar>
  );
}
