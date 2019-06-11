import fetch from '@/utils/fetch'

export const sendMailApi = (name, id, phone, remarks) => fetch('/transoutage/send_email',{
	name:name,
	id:id,
	phone:phone,
	remarks:remarks
},"POST");