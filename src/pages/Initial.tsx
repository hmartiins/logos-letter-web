import Button from "../components/Button";
import Input from "../components/Input";
import Title from "../components/Title";
import Wrapper from "../components/Wrapper";

export default function Initial() {
  return (
    <Wrapper>
      <Title>LogosLetter</Title>

      <Input
        placeholder="Digite o seu e-mail"
        type="email" 
      />

      <Button>Inscrever-se</Button>
    </Wrapper>
  )
}
