export interface IUserRegister {
  id: string | null
  name: string | null
  password: string | null
  email: string | null
  image: string | null
  instagram: string | null
  instrument: string | null
  isAdm: boolean | null
  leftHanded: boolean | null
  musicStyle: string | null
  nickName: string | null
  phone: string | null
  myJams: [{ index: string }] | null
}
