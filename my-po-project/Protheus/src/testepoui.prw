#INCLUDE "PROTHEUS.CH"
#INCLUDE "TOTVS.CH"

user function testepoui()
    Fwcallapp("my-po-project")
return

Static Function JsToAdvpl(oWebChannel,cType,cContent)
    Local nx := 0
 
    _aVarI := {cType,cContent}
    VarInfo('_aVarI', _aVarI , , .F. )
    ;/*logproc*/ConOut(PadC("inicio",32,"=")+ProcSource() + ":"+cValToChar(ProcLine()))
    Do Case
        Case cType == "preLoad"
        Case cType == "jstoadvplPar1"
            For nx := 1 to 10
                ConOut(cValToChar(nx))
                Sleep(1000)
            Next
            oWebChannel:AdvplToJs("receiveId1", "qwerty")
    EndCase
 
    ;/*logproc*/ConOut(PadC("Fim JsToAdvpl",32,"=")+ProcSource() + ":"+cValToChar(ProcLine()))
Return
