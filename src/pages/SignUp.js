import React from "react";
import {
  Container,
  SectionWrapper,
  FormCard,
  HeroHeading,
} from "../components/";

function SignUp() {
  return (
    <section className="login-section">
      <Container>
        <SectionWrapper>
          <HeroHeading />
        </SectionWrapper>
        <SectionWrapper>
          <FormCard />
        </SectionWrapper>
      </Container>
    </section>
  );
}

export default SignUp;
