export interface EnderecoCompletoDto {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

export type EnderecoDto = Omit<
  EnderecoCompletoDto,
  "ibge" | "gia" | "ddd" | "siafi"
>;
