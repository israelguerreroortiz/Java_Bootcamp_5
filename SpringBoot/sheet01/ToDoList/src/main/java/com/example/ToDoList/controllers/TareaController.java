package com.example.ToDoList.controllers;

import com.example.ToDoList.model.Tarea;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.ArrayList;

@RestController
@RequestMapping("/tareas")
public class TareaController {

    List<Tarea> tareas =  new ArrayList<>();

    @GetMapping
    public List<Tarea> getTareas() {
        return tareas;
    }

    @GetMapping(params = "completado")
    public List<Tarea> getTareasCompletado(@RequestParam boolean completado) {
            return tareas.stream()
                    .filter(tarea -> tarea.isCompletado() == completado)
                    .toList();
    }

    @PostMapping
    public String addTarea(@RequestBody Tarea tarea) {
        tareas.add(tarea);
        return "Tarea added";
    }

    @PutMapping("/{id}")
    public String updateTarea(@RequestBody Tarea tarea, @PathVariable int id) {
        if (id < 0 || id >= tareas.size()) {
            return "ID inválido";
        }

        Tarea tareaExistente = tareas.get(id);
        tareaExistente.setDescripcion(tarea.getDescripcion());
        tareaExistente.setCompletado(tarea.isCompletado());

        return "Tarea actualizada";
    }

    @DeleteMapping("/{id}")
    public String deleteTarea(@PathVariable int id) {
        if (id < 0 || id >= tareas.size()) {
            return "Invalid ID";
        }
        Tarea eliminarTarea = tareas.get(id);
        tareas.remove(eliminarTarea);
        return "Tarea removed";
    }
}
