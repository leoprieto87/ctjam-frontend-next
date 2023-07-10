import mongoose from 'mongoose'

const dbConnect = async () => {
  try {
    await mongoose.connect(
      'mongodb://ctjam01:jam123@mongodb.ctjam.com.br/ctjam01',
    )
    console.log('conectou')
  } catch (error) {
    throw new Error('Connection failed')
  }
}

export default dbConnect
