var contactTabs=null;function ShowTab(a){if(contactTabs==null){contactTabs=$("page").select(".tabset")[0].down()}contactTabs.select("li").each(function(b){if(b.id=="tab"+a){b.addClassName("activeTab");$(b.id.substring(3)).show()}else{b.removeClassName("activeTab");$(b.id.substring(3)).hide()}});return false};