import styles from './styles.module.css'
import { useState } from 'react';

export default function HomePage() {
    const [Numero, setNumero] = useState(1);
    const message = 0;

    function plus() {
        if (Numero < 10) {
            setNumero(Numero + 1);
    };
        if (Numero === 10) {
            setNumero(String(Numero) + '(Máx. = 10)');
    };
    };
    
    function zerar() {
        setNumero(message);
    };

    return (
        <div id={styles.container}>
            <div id={styles.to_do}>
                
                <div id={styles.to_do_tittle}>
                    <p>A Fazer</p>
                </div>

                <div id={styles.to_do_content}>

                    <div>
                        <form action="" id={styles.add_tarefa}>
                            <label htmlFor={styles.titulo_tarefa}></label>
                            <input type="text" id={styles.titulo_tarefa} placeholder='Fazer' required/>

                            <label htmlFor={styles.resposnsavel}></label>
                            <input type="text" id={styles.resposnsavel} placeholder='Reponsável' required/>

                            <label htmlFor={styles.validade}></label>
                            <input type="date" id={styles.validade} required/>

                            <label htmlFor={styles.description}></label>
                            <input type="text" id={styles.description} placeholder='Descrição' required/>
                        </form>
                    </div>

                    <div id={styles.work}>
                            <p>Grau de importância da tarefa: {Numero}</p>
                            <button onClick={plus}>Grau maior</button>
                            <button onClick={zerar}>Zerar</button>
                    </div>
                </div>

            </div>

            <div id={styles.doing}>

                <div id={styles.doing_tittle}>
                    <p>Fazendo</p>
                </div>

                <div id={styles.doing_content}>
                    <div id={styles.work_description}>

                    </div>
                </div>

            </div>

            <div id={styles.done}>

                <div id={styles.done_tittle}>
                    <p>Feito</p>
                </div>

                <div id={styles.done_content}>
                    <div id={styles.work_done}>

                    </div>
                </div>
            </div>

        </div>
    );
}