import { Trash } from 'phosphor-react'
import { ThumbsUp } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'
import { useState } from 'react'


interface CommentProps{
  content: string;
  onDeleteComment: (comment:string) => void;

}


export function Comment({ content, onDeleteComment,}: CommentProps){

  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  } // essa função faz a comunicação entre dois componentes (por meio da propriedade onDeleteComment)

  function handleLikeComment() {
    setLikeCount(likeCount + 1);
  }

  return(
    <div className={styles.comment}>
      <Avatar hasBorder={false} src='https://avatars.githubusercontent.com/u/111822968?v=4' alt=''/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Florença Melo</strong>
             <time title='4 de abril de 2022 ' dateTime='2022-04-04 08:13'>Cerca de 2h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title='Deletar comentários'>
              <Trash size={20} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}> 
            Aplaudir 
            <ThumbsUp />
           <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}

// a única forma de voce comunicar um componente com o outro é atraves das PROPRIEDADES, sendo passadas como funções