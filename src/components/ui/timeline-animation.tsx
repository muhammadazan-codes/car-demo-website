import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

export function TimelineContent({ as = "div", animationNum = 0, timelineRef, customVariants, children, className, ...props }: any) {
  const [visible, setVisible] = useState(false)
  const ref = useRef<any>(null)
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true)
    }, { threshold: 0.2 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  const Comp = (motion as any)[as] || motion.div
  const variants = customVariants || { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }
  return (
    <Comp ref={ref} initial="hidden" animate={visible ? "visible" : "hidden"} custom={animationNum} variants={variants} className={className} {...props}>
      {children}
    </Comp>
  )
}
export default TimelineContent


