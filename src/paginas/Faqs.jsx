import React, { useState } from 'react';
import './Faqs.css';
import { Link } from 'react-router-dom';
import InicioScroll from './InicioScroll';

const Faqs = () => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);
  const [activeAnswerIndex, setActiveAnswerIndex] = useState(null);
  document.title = "FAQs";
  const accordionItems = [
    {
      question: 'PAGOS',
      answers: [
        {
          text: '¿Puedo pagar con cualquier tarjeta sea de débito o crédito?',
          additionalAnswers: [
            'Nasu está diseñado para facilitar tu vida y llevar salud preventiva a tu mascota de la forma más simple. Por ello, nuestros cobros se realizan de forma automática cada mes a tu tarjeta, ya sea de débito o crédito.',

          ],
        },
        {
            text: 'Cuándo utilizo NASU para la visita preventiva, ¿debo pagarle al veterinario?',
            additionalAnswers: [
              'No. La idea de NASU es que los pagos se hagan de manera automática a lo largo del año, de manera que cuando hagás la visita preventiva a tu veterinario, no tengás que pagar por el servicio recibido.',
            ],
          },
          {
            text: 'En mi cita de NASU el veterinario descubrió una lesión y me recomendó tratarla. ¿Debo pagar?',
            additionalAnswers: [
              'Sí. NASU es una propuesta de planes de salud preventiva, pero al mismo tiempo favorece a tu mascota ya que, al estar más en contacto con el Médico Veterinario, pueden descubrirse lesiones o enfermedades que se puedan tratar a tiempo, y que están aparte de tu plan de salud. Sí aceptás la recomendación de tu veterinario, sí tenés que pagar esos servicios adicionales.',
            ],
          },
          {
            text: '¿NASU es un seguro para mascotas?',
            additionalAnswers: [
              'No somos un seguro. Somos un sistema de planes de medicina preventiva para las mascotas, en el cual procuramos una mejor salud para ellas, con la conveniencia de pagos automáticos en cuotas mensuales.',
            ],
          },
        ],
        // Add more answers as needed
    },
{
        question: 'CLÍNICAS VETERINARIAS',
        answers: [
          {
            text: '¿Puedo utilizar NASU con mi Médico Veterinario habitual?',
            additionalAnswers: [
              'Si tu Médico Veterinario es parte de nuestra red de Clínicas, podrás seguir yendo sin problema. Si aún no es miembro de nuestra red, vos podés sugerirle que se afilie.',
  
            ],
          },
          {
            text: '¿Cómo puedo saber qué Clínicas pertenecen a la red?',
            additionalAnswers: [
              'En nuestra página web podés ver la lista de las Clínicas Veterinarias a tu alrededor que pertenecen a nuestra red.',
            ],
          },
          {
            text: 'No recibí confirmación de mi veterinario sobre las citas que solicité. ¿Qué debo hacer?',
            additionalAnswers: [
              'Utilizá nuestra página de contacto, proporcionando la información solicitada de tu mascota y de la Clínica Veterinaria donde solicitaste tu cita. Con gusto te resolveremos la situación directamente.',
            ],
          },
      ],
    },
    {
        question: 'COBERTURAS',
        answers: [
          {
            text: 'Si mi mascota fallece, ¿puedo transferir mi Plan de Salud a otra mascota?',
            additionalAnswers: [
              'Aunque lamentamos mucho enterarnos de esa situación, no hay ningún inconveniente en transferir el plan de una forma satisfactoria para tu conveniencia. Contáctanos y hacenos llegar el certificado oficial de defunción de tu mascota emitido por tu médico veterinario. Nosotros te ayudaremos a trasladar el plan a una nueva mascota.',
  
            ],
          },
          {
            text: '¿Puedo cancelar la membresía de mi mascota a NASU?',
            additionalAnswers: [
              'Nasu es un programa anual basado en un plan de medicina preventiva de 12 meses en adultos y 10 meses en cachorros. Su precio, así como las condiciones contractuales aceptadas por todos, indican que una vez inscrito en el Plan de Salud, tu mascota será parte de NASU hasta culminar el contrato.',
            ],
          },
      ],
    },
    {
        question: 'MASCOTAS',
        answers: [
          {
            text: '¿Qué pasa si no sé la edad de mi mascota?',
            additionalAnswers: [
              'Si no sabés la edad exacta de tu mascota, lo importante es poder ubicarla en una de tres categorías: Cachorros (de 0 a 1 año), Adultos (de 1 año a 9 años) o Mayores (más de 9 años). A partir de estas categorías, deberás poner una fecha de nacimiento tentativa para que NASU te sugiera un Plan de Salud de acuerdo a la edad aproximada de tu mascota.',
  
            ],
          },
          {
            text: '¿Qué pasa si mi mascota no es de raza pura y no sé a cuál categoría de raza asignarla?',
            additionalAnswers: [
              'Nuestras mascotas sin raza definida las catalogamos como "Sin Raza Definida / Mestizo" en el caso de Caninos, y como "Americanos de Pelo Corto" en el caso de los Felinos.',
            ],
          },
      ],
    },
    {
        question: 'DONACIONES',
        answers: [
          {
            text: '¿Cómo colabora NASU con los animales abandonados?',
            additionalAnswers: [
              'NASU tiene como objetivo ayudar a tu mascota y también a aquellas que no tienen hogar. El 1% de tus pagos van directamente para asociaciones reconocidas que albergan animales de la calle.',
  
            ],
          },
      ],
    },
    {
        question: 'CONTACTO',
        answers: [
          {
            text: '¿Cómo los puedo contactar para hacer una consulta de la que no obtuve respuesta en las FAQ´s?',
            additionalAnswers: [
              'Podés entrar a la pestaña de CONTACTENOS y desde ahí nos enviás tu consulta.',  
            ],
          },
      ],
    },
    // Add more items as needed
  ];

  const handleClick = (questionIndex, answerIndex) => {
    setActiveQuestionIndex(questionIndex);
    setActiveAnswerIndex(answerIndex === activeAnswerIndex ? null : answerIndex);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="box with-image">
          <div className="content">
            <h1>¿Cómo podemos ayudarte a vos y tu mascota?</h1>
            <p>Encontrá respuesta a las dudas más frecuentes que nos realizan</p>
      </div>
      </div>

            <div className="accordion-container">
            <h1>Faqs</h1>
            <p style={{margin: '2%'}}>Podés navegar en esta sección y desplegar las preguntas frecuentes
             para aclarar tus dudas, en caso de no hallar la respuesta que necesitás, escribinos a través 
             de {' '}<Link to="/contactenos">este enlace!</Link></p>
              {accordionItems.map((item, questionIndex) => (
                <div key={questionIndex}>
                  <div
                    className="question"
                    onClick={() => handleClick(questionIndex, null)}
                  >
                    <strong>{item.question}</strong>
                  </div>
                  {activeQuestionIndex === questionIndex && (
                    <div className="answer">
                      {item.answers.map((answer, answerIndex) => (
                        <div key={answerIndex} style={{backgroundColor: 'lightgrey', answerIndex:  'answerColors.length', marginBottom: '10px'}}>
                          <p
                            onClick={() => handleClick(questionIndex, answerIndex)}
                            className={activeAnswerIndex === answerIndex ? 'active-answer' : ''}
                          >
                            {answer.text}
                          </p>
                          {activeAnswerIndex === answerIndex && (
                            <div className="additional-answer">
                              {answer.additionalAnswers &&
                                answer.additionalAnswers.map((additionalAnswer, additionalIndex) => (
                                  <div key={additionalIndex}>{additionalAnswer}</div>
                                ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <InicioScroll />
        </div>

  );
};

export default Faqs;
