import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: { t: TFunction }) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("Contacto")}</Language>
              <Large to="/">{t("¿Necesitas asistencia técnica?")}</Large>
              <Para>
                {t(`Nuestro equipo de TI está listo para ayudarte con cualquier consulta.`)}
              </Para>
              <a href="mailto:soporte@clienso.com">
                <Chat>{t(`Hablemos`)}</Chat>
              </a>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Title>{t("Seguridad")}</Title>
              <Large to="/">{t("Política de Seguridad")}</Large>
              <Large to="/">{t("Principios de Software")}</Large>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Empty />
              <Large to="/">{t("Centro de Soporte")}</Large>
              <Large to="/">{t("Atención al Cliente")}</Large>
            </Col>
          </Row>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Empty />
              <Language>{t("Dirección")}</Language>
              <Para>Ciudad Empresarial ClienSO</Para>
              <Para>Avenida Principal, Torre 5</Para>
              <Para>Santiago, Chile</Para>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Title>{t("Empresa")}</Title>
              <Large to="/">{t("Quiénes somos")}</Large>
              <Large to="/">{t("Noticias")}</Large>
              <Large to="/">{t("Prensa")}</Large>
              <Large to="/">{t("Carreras y Cultura")}</Large>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Label htmlFor="select-lang">{t("Idioma")}</Label>
              <LanguageSwitchContainer>
                <LanguageSwitch onClick={() => handleChange("en")}>
                  <SvgIcon
                    src="united-states.svg"
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
                <LanguageSwitch onClick={() => handleChange("es")}>
                  <SvgIcon
                    src="spain.svg"
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
              </LanguageSwitchContainer>
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <LogoContainer>
                <SvgIcon
                  src="clientso-logo.jpg"
                  aria-label="homepage"
                  width="101px"
                  height="64px"
                />
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              <SocialLink
                href="https://github.com/ClienSO"
                src="github.svg"
              />
              <SocialLink
                href="https://twitter.com/ClienSO"
                src="twitter.svg"
              />
              <SocialLink
                href="https://www.linkedin.com/company/clienso/"
                src="linkedin.svg"
              />
              <SocialLink
                href="https://medium.com/@clienso"
                src="medium.svg"
              />
              <a
                href="https://ko-fi.com/ClienSO"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  height="36"
                  style={{ border: 0, height: 36 }}
                  src="https://storage.ko-fi.com/cdn/kofi3.png?v=3"
                  alt="Apóyanos en Ko-fi"
                />
              </a>
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
