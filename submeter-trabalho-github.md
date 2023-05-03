# Criar conta no github

se ja tiverem conta:
https://github.com/login

se nao tiverem conta:
https://education.github.com/pack

# Criar Repositorio para o trabalho

canto superior direito, clickar no "+" -> "New Repository"

Repository name : "pw-project-submittion"
Description (optional)
Public or Private (se for privado, adicionar o meu username `jvPalma` para ter acesso)

"Create Repository"

# Clonar projeto para o vosso computador local

depois de criar o repositorio voces vao para o link do mesmo
`https://github.com/jvPalma/pw-project-submittion`

caso nao tenham seguido, podem encontrar o repositorio no vosso perfil -> `Your Repositories`

copiem o link do VOSSO repositorio:
`https://github.com/jvPalma/pw-project-submittion`

no terminal do vosso computador: (lembre-se de usar os vossos links e nao o meu de exemplo)

```bash
	cd pasta/que/quiserem/o/vosso/trabalho
    git clone https://github.com/jvPalma/pw-project-submittion.git
	cd pw-project-submittion #o nome da pasta aqui é o nome do repositorio que criaram na vossa conta
```

através do finder/explorador de ficheiros, podem copiar os ficheiros do projeto para dentro da pasta clonada
para assim enviar o codigo para o github

# Enviar codigo para github

enviar o codigo para o github existe sempre 3 fases
1º staging
2º commit
3º push

1º staging - esta fase é a fase de nos dizermos ao git que ficheiros queremos enviar, imaginem que é um email, e estamos a adicionar o conteudo do email, e o conteudo, sao os ficheiros de codigo, ou alterações de codigo que queremos enviar.
podem fazer este processo varias vezes em ficheiros diferentes, em alturas diferentes, como no email pode ficar nos rascunhos/draft muito tempo até querermos enviar esse email.

2º commit - a fase de commit é quando enviarmos o email, e identificamos a sua intenção no subject do email. é o mesmo no controlo de versoes, o commit vai com uma mensagem que vai identificar no repositorio, as alterações que foram feitas naquele envio de codigo. exemplo "add login page" ou "change color on login submit button" mensagens com significado, curtas, que identificam o codigo alterado.
Este passo faz o commit mas nao o envia logo par ao github, pois no nosso codigo local podemos ter varios commits em simultaneo e enviar tudo de uma vez, ou enviar 1 de cada vez. seguindo a analogia do email, isto vai por o subject no rascunho, e a partir do subject, nao é mais possivel alterar o seu conteudo.

3º push - é quando nos enviamos todos os commits feitos no nosso computador para o servidor do github, no caso dos emails, vai pegar todos os emails em rascunho COM subject, e vai enviar para o destinatario, neste caso, o vosso repositorio no github.

isto em termos de codigo, em que se traduz?

1º staging:

```bash
	cd pasta/que/quiserem/o/vosso/trabalho
	git add . # fazer " add . " vai adicionar todas as alterações feitas no projeto ao staging
	git add path/to/file/changed # fazer " add ./file " vai adicionar apenas aquele ficheiro/pasta ao staging
```

2º commit:
se nao houver mais alterações para adicionar em staging:

```bash
	git commit -m "commit message" # -m é a flag para enviar uma mensagem, e seguido dentro de aspas, colocamos a mensagem
```

3º push:
se nao houver mais commits para fazer:

```bash
	git push # só nesta fase, é que o codigo vai ser enviado do vosso computador para o servidor do github
```
