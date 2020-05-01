import smtplib

try:
		msgFrom = str(input("Informe o e-mail de destino: "))
		#codigo configura para servidor outlook
		smtpObj = smtplib.SMTP('smtp.outlook.com', 587)
		smtpObj.ehlo()
		smtpObj.starttls()
		msgTo = 'quantum01.pi@gmail.com'
		toPass = 'usjt@123'
		smtpObj.login(msgTo, toPass)
		msg = '''
		Mensagem do E-mail


        Teste att iuri
		'''
		smtpObj.sendmail(msgTo,msgFrom,'Subject: Teste Pica\n{}'.format(msg))
		smtpObj.quit()
		print("Email enviado com sucesso!")
except:
		print("Erro ao enviar e-mail")