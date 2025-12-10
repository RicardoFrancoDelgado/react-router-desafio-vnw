import CardVoluntary from "../../components/card-voluntary/CardVoluntary";
import s from "./voluntary.module.scss";

const Voluntary = () => {
  return (
    <>
      <section className={s.voluntaryPage}>
        <h2>Seja Voluntário</h2>
        <p>Junte-se a nós e faça a diferença na vida de pessoas que precisam</p>
        <div className={s.cards}>
          <CardVoluntary
            title="Impacto Direto"
            content="Sua dedicação salva vidas e transforma comunidades"
          />
          <CardVoluntary
            title="Crescimento Pessoal"
            content="Desenvolva habilidades e cresça profissionalmente"
          />
          <CardVoluntary
            title="Comunidade"
            content="Faça parte de uma rede de profissionais comprometidos"
          />
        </div>
      </section>
    </>
  );
};

export default Voluntary;
