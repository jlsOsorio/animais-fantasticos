export default function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = "data-outside";

  function handleOutsideClick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, handleOutsideClick);
      });
      callback();
    }
  } // Com o efeito buble do js, este método irá correr sempre que existir (atenção ao removeEventListener) e for parent do elemento que despoletou o primeiro evento.

  if (!element.hasAttribute(outside)) {
    events.forEach((userEvent) => {
      setTimeout(() => html.addEventListener(userEvent, handleOutsideClick)); // setTimeout definido para o evento só ser activado depois de corridos os outros métodos (assíncrono). Necessário para o menu mobile, porque carregando no botão de menu para abrir a lista, este está fora da própria lista, pelo que o evento seria imediatamente despoletado e nunca apareceria a lista
    });
    element.setAttribute(outside, "");
  }
}
