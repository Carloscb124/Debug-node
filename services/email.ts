async function getBaseEmail(senderName:string): Promise <string> {
    let base = await getHeaderText();
    
    base += `Ola ${senderName}, gostaria de me increver para uma vaga`;
    base += "\n estou deixando meu curriculo";

    return base;
}

async function getHeaderText(): Promise  <string> {
  return "EMAIL PARA VOCÊ \n"  
}

export {getBaseEmail};
