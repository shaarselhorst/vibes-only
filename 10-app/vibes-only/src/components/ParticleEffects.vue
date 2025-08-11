<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  maxLife: number
  color: string
  size: number
  type: 'confetti' | 'sparkle'
}

const canvasRef = ref<HTMLCanvasElement>()
const particles = ref<Particle[]>([])
const animationId = ref<number>()

const colors = [
  '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7',
  '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9'
]

const createConfetti = (x: number, y: number) => {
  const count = 50
  for (let i = 0; i < count; i++) {
    particles.value.push({
      x: x + (Math.random() - 0.5) * 100,
      y: y + (Math.random() - 0.5) * 100,
      vx: (Math.random() - 0.5) * 8,
      vy: (Math.random() - 0.5) * 8 - 2,
      life: 1,
      maxLife: 1,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 4 + 2,
      type: 'confetti'
    })
  }
}

const createSparkles = (x: number, y: number) => {
  const count = 30
  for (let i = 0; i < count; i++) {
    particles.value.push({
      x: x + (Math.random() - 0.5) * 60,
      y: y + (Math.random() - 0.5) * 60,
      vx: (Math.random() - 0.5) * 6,
      vy: (Math.random() - 0.5) * 6,
      life: 1,
      maxLife: 1,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 3 + 1,
      type: 'sparkle'
    })
  }
}

const animate = () => {
  const canvas = canvasRef.value
  if (!canvas) return

  const ctx = canvas.getContext('2d')
  if (!ctx) return

  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  // Update and draw particles
  particles.value = particles.value.filter(particle => {
    particle.x += particle.vx
    particle.y += particle.vy
    particle.vy += 0.1 // gravity for confetti
    particle.life -= 0.02

    if (particle.life <= 0) return false

    ctx.save()
    ctx.globalAlpha = particle.life
    ctx.fillStyle = particle.color

    if (particle.type === 'confetti') {
      // Draw confetti pieces
      ctx.fillRect(
        particle.x - particle.size / 2,
        particle.y - particle.size / 2,
        particle.size,
        particle.size
      )
    } else {
      // Draw sparkles
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
      ctx.fill()
    }

    ctx.restore()
    return true
  })

  animationId.value = requestAnimationFrame(animate)
}

const triggerEffectsAt = (x: number, y: number) => {
  createConfetti(x, y)
  createSparkles(x, y)
}

const triggerEffects = () => {
  if (!canvasRef.value) return
  const rect = canvasRef.value.getBoundingClientRect()
  const centerX = rect.width / 2
  const centerY = rect.height / 2
  triggerEffectsAt(centerX, centerY)
}

onMounted(() => {
  if (canvasRef.value) {
    const canvas = canvasRef.value
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    window.addEventListener('resize', resizeCanvas)
    animate()
    
    onUnmounted(() => {
      window.removeEventListener('resize', resizeCanvas)
    })
  }
})

onUnmounted(() => {
  if (animationId.value) {
    cancelAnimationFrame(animationId.value)
  }
})

// Expose the trigger function
defineExpose({
  triggerEffects,
  triggerEffectsAt
})
</script>

<template>
  <canvas
    ref="canvasRef"
    class="fixed inset-0 pointer-events-none z-50"
  />
</template>
