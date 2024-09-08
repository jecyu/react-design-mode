import React, { useContext, useEffect, useState } from "react";
import Row from "./Row";
import { LocaleContext, ThemeContext } from "./context";

export default function GreetingHook() {
  const [name, setName] = useState("Harry");
  const [surname, setSurname] = useState("Potter");
  const locale = useContext(LocaleContext);
  const theme = useContext(ThemeContext);
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }

  const handleSurnameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSurname(event.target.value);
  }

  useEffect(() => {
    document.title = name + " " + surname;
  }, [name, surname]);

  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

    return (
      <section className={theme}>
        <Row label="Name">
          <input type="text" value={name} onChange={handleNameChange} />
        </Row>
        <Row label="Surname">
          <input type="text" value={surname} onChange={handleSurnameChange} />
        </Row>
        <Row label="Language">
          {locale}
        </Row>
        <Row label="Width">
          {width}
        </Row>
      </section>
    );
}