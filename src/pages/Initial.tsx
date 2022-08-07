import Input from "../components/Input";
import Wrapper from "../components/Wrapper";

export default function Initial() {
  return (
    <Wrapper>
      <h1>LogosLetter</h1>
      <Input
        placeholder="Digite o seu e-mail"
        type="email" 
      />
    </Wrapper>
  )
}
