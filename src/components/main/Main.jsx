import PrimaryButton from "../primary-button/PrimaryButton";
import s from "./main.module.scss";

const Main = () => {
  return (
    <main className={s.mainContainer}>
      <section>
        <div className={s.mainBudget}>
          <img src="/Frame.png" alt="icone de um aparelho de médico" />
          <p>Saúde para todos</p>
        </div>

        <h1>Saúde e cuidado sem barreiras</h1>

        <p>
          Um projeto dedicado a oferecer atendimento médico e odontológico
          gratuito para pessoas que mais precisam na nossa comunidade.
        </p>

        <div className={s.mainBtn}>
          <PrimaryButton to="/voluntary" title="Seja voluntário" />
          <a href="#" className={s.mainBtnDotted}>Como ajudar</a>
        </div>
      </section>

      <section>
        <img src="/doutor.png" alt="Imagem de um médico sorrindo" />
      </section>
    </main>
  );
};

export default Main;
