package com.leonardobrancalhao.financeiro.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.leonardobrancalhao.financeiro.model.Categoria;
import com.leonardobrancalhao.financeiro.service.CategoriaService;

@RestController
@RequestMapping(path = "categorias")
public class CategoriaController {

	@GetMapping
	public ResponseEntity<?> listar() {
		CategoriaService service = new CategoriaService();
		return new ResponseEntity<>(service.listar(), HttpStatus.OK);
	}

	@GetMapping(path = "/{id}")
	public ResponseEntity<?> listar(@PathVariable Integer id) {
		CategoriaService service = new CategoriaService();
		return new ResponseEntity<>(service.listar(id), HttpStatus.OK);
	}

	@PostMapping
	public ResponseEntity<?> salvar(@RequestBody Categoria categoria) {
		CategoriaService service = new CategoriaService();
		service.salvar(categoria);
		return new ResponseEntity<>(HttpStatus.OK);
	}

}
