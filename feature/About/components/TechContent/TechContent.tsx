import TypographyText from "../../../../components/Typograph"
import { TechContentStyled, TechContentRow, TechContentInfo, TechCard } from "./TechContent.styled"
import Image from "../../../../components/Image"
import { useSelector } from "../../../../hooks/useSelector"


export const TechContent = () => {

    let appMode = useSelector(state => state.home.appMode)

    const colorMode = () => {
        if (appMode) {
            return "black"
        }

        return "white"
    }

    return (
        <TechContentStyled>
            <TechContentRow>
                <TechContentInfo md="3">
                    <TypographyText font="65" color={colorMode()} bold="true" text="true">
                        tech.az media
                    </TypographyText>
                </TechContentInfo>
                <TechContentInfo md="9">
                    <TechCard mode={appMode ? "true" : ""}>
                        <Image width="100" height="110" src="/image/icons _ graphics/Asset 6.png" alt="techaz" />
                        <TypographyText font="25" color={colorMode()} text="true">
                            trend texnologiyası və startap xəbərləri
                        </TypographyText>
                    </TechCard>
                    <TechCard mode={appMode ? "true" : ""}>
                        <Image width="100" height="110" src="/image/icons _ graphics/Asset 9.png" alt="techaz" />
                        <TypographyText font="25" color={colorMode()} text="true">
                            ən son gadget rəyləri
                        </TypographyText>
                    </TechCard>
                    <TechCard mode={appMode ? "true" : ""}>
                        <Image width="100" height="110" src="/image/icons _ graphics/Asset 7.png" alt="techaz" />
                        <TypographyText font="25" color={colorMode()} text="true">
                            beynəlxalq texnologiya hadisələrindən canlı yayımlar
                        </TypographyText>
                    </TechCard>
                    <TechCard mode={appMode ? "true" : ""}>
                        <Image width="100" height="110" src="/image/icons _ graphics/Asset 8.png" alt="techaz" />
                        <TypographyText font="25" color={colorMode()} text="true">
                            yeniliklərə dair xüsusi məqalələr
                        </TypographyText>
                    </TechCard>
                </TechContentInfo>
            </TechContentRow>
        </TechContentStyled>
    )
}