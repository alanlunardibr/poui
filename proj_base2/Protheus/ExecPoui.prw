#INCLUDE "PROTHEUS.CH"
#INCLUDE "TOTVS.CH"

user function ExecPoui()
    Fwcallapp("proj_base")
return

Static Function JsToAdvpl(oWebChannel,cType,cContent)
    Do Case
        // Se a interação que recebi for igual a mensagemJavascript
        Case cType == 'mensagemJavascript'
            // Imprimo a informação que recebi para trabalhar
            alert('O que veio do JS: ' + cContent)
        // Se a interação que recebi for igual a receberProtheus
        Case cType == 'receberProtheus'
            // Envio um comando ADVPL para minha aplicação Web
            oWebChannel:AdvPLToJS('mensagemProtheus', 'Comando ADVPL')
    End
Return .T.
