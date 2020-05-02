import smtplib

try:
		msgFrom = str(input("Informe o e-mail de destino: murillobilchesnavarro@gmail.com"))
		#codigo configura para servidor outlook
		smtpObj = smtplib.SMTP('smtp.gmail.com', 587)
		smtpObj.ehlo()
		smtpObj.starttls()
		msgTo = 'quantum01.pi@gmail.com'
		toPass = 'usjt@123'
		smtpObj.login(msgTo, toPass)
		msg = '''
		Mensagem do E-mail


        Teste att Quantum
		'''
		smtpObj.sendmail(msgTo,msgFrom,'Subject: Teste\n{}'.format(msg))
		smtpObj.quit()
		print("Email enviado com sucesso!")
except:
		print("Erro ao enviar e-mail")