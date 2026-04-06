function FloatingInput({ label, value, onChange }:any){
  return (
    <div className="relative">
      <input
        value={value}
        onChange={e=>onChange(e.target.value)}
        className="
        w-full p-4 rounded-xl
        bg-white/5 border border-white/10
        text-white outline-none
        focus:border-white/30
        peer
        "
      />

      <label
        className="
        absolute left-4 top-1/2 -translate-y-1/2
        text-white/50 text-sm
        transition-all
        peer-focus:-top-2 peer-focus:text-xs peer-focus:text-white/70
        peer-focus:bg-[#131313] peer-focus:px-2
        "
      >
        {label}
      </label>
    </div>
  )
}

export default FloatingInput