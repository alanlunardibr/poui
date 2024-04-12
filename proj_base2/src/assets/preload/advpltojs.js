function advpltojs(codeType, content) {
    // Se a interação que recebi for igual a mensagemProtheus
    if (codeType == "mensagemProtheus") {
      // Eu dou um alert com a informação que recebi para trabalhar
      //alert("Mensagem recebida do Protheus: " + content);
  
      localStorage.setItem("parametros", JSON.stringify(content));
  
      console.log(
        "localStorage.getItem(parametros)",
        localStorage.getItem("parametros")
      );
    }
  }