import React, { memo } from "react";

function Footer(){
  return(
    <footer className="bg-slate-900 text-slate-400 text-center py-10">
      <p className="text-sm">
        © 2026 NovaUI. All rights reserved.
      </p>
    </footer>
  )
}

export default memo(Footer);