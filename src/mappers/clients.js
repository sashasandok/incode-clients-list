import uuidv1 from 'uuid'

export default client => {
  return {
    id: uuidv1(),
    firstName: client.general.firstName,
    lastName: client.general.lastName,
    avatar: client.general.avatar,
    company: client.job.company,
    title: client.job.title,
    email: client.contact.email,
    phone: client.contact.phone,
    street: client.address.street,
    city: client.address.city,
    zipCode: client.address.zipCode,
    country: client.address.country,
  }
}
