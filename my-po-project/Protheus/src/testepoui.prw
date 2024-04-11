#INCLUDE "PROTHEUS.CH"
#INCLUDE "TOTVS.CH"

user function testepoui()
    Fwcallapp("my-po-project")
return

Static Function JsToAdvpl(oWebChannel,cType,cContent)

Local cUserAdm  := ""
Local lUserAdm  := FwIsAdmin()

If lUserAdm
  cUserAdm := "true"
Else
  cUserAdm := "false"
Endif

Do Case
  Case cType == "preLoad"
    cJsonCompany  := '{"Code":"'+cEmpAnt+'","InternalId":"'+cEmpAnt+'","CorporateName":"'+FWGrpName(cEmpAnt)+'","AccessAdm":"'+cUserAdm+'"}'
    cJsonBranch   := '{"CompanyCode":"'+cEmpAnt+'","EnterpriseGroup":"'+cEmpAnt+'","ParentCode":"'+cFilAnt+'","Code":"'+cFilAnt+'","Description":"'+FWFilialName()+'"}'
    oWebChannel:AdvPLToJS('setCompany', cJsonCompany)
    oWebChannel:AdvPLToJS('setBranch', cJsonBranch)
EndCase

Return
