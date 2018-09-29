package com.leonardobrancalhao.financeiro.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.leonardobrancalhao.financeiro.model.Categoria;
import com.leonardobrancalhao.financeiro.service.CategoriaService;

@RestController
@RequestMapping(path = "categorias")
@CrossOrigin("*")
public class CategoriaController {

	@Autowired
	private CategoriaService service;

	@GetMapping
	public ResponseEntity<?> listar() {
		return new ResponseEntity<>(service.listar(), HttpStatus.OK);
	}

	@GetMapping(path = "/{id}")
	public ResponseEntity<?> listar(@PathVariable Integer id) {
		return new ResponseEntity<>(service.listar(id), HttpStatus.OK);
	}

	@PostMapping
	public ResponseEntity<?> salvar(@RequestBody Categoria categoria) {
		service.salvar(categoria);
		return new ResponseEntity<>(HttpStatus.OK);
	}

	@PostMapping(path = "/remover")
	public ResponseEntity<?> remover(@RequestBody Integer id) {
		service.remover(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}

	@GetMapping(path = "/filtrar")
	public ResponseEntity<?> filtrar(@RequestParam String nome) {
		return new ResponseEntity<>(service.filtrar(nome), HttpStatus.OK);
	}

}
