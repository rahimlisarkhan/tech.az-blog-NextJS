import { useTranslation } from "next-i18next"
import { useRouter } from "next/router"
import { useSelector } from "../../hooks/useSelector"
import { router } from "../../utils/route"
import ButtonOutlined from "../ButtonOutlined"
import { NavbarMobileContent } from "./NavbarMobile.styled"
import { MenuList, MenuItemStyle } from "./NavbarMobile.styled"




export const NavbarMobile = ({ closeMenu }:any) => {
    let mode = useSelector(state => state.home.appMode)
    let { push, asPath } = useRouter()
    let { t } = useTranslation("menu");

    const isActive = (href?: string): string => {
        if (href === asPath) {
            return "true"
        }
        return ""
    }

    const menuAcions = (href: string) => {
        push(href)
        closeMenu()
    }

    return (
        <NavbarMobileContent mode={mode ? "true" : ""}>
            <MenuList>
                <ButtonOutlined mode={mode ? "true" : ""} onClick={()=>push("/join")}>
                    bizə qoşul 
                </ButtonOutlined>

                {Object.values(router.menu).map((item) => {
                    return <MenuItemStyle mode={mode} key={`mobile-menu-id-${item.id}`} active={isActive(item.href)}
                        onClick={() => menuAcions(item.href)}>
                        {t(item.title)}
                    </MenuItemStyle>
                })}
            </MenuList>
        </NavbarMobileContent>
    )
}